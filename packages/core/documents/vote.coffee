class Vote extends share.BaseDocument
  # createdAt: time of document creation
  # updatedAt: time of the last change
  # author:
  #   _id
  #   username
  # motion:
  #   _id
  #   discussion
  # value: the latest version of the value (can be of arbitrary type)
  # changes: list (the last list item is the most recent one) of changes
  #   updatedAt: timestamp of the change
  #   value

  @Meta
    name: 'Vote'
    fields: =>
      author: @ReferenceField User, User.REFERENCE_FIELDS()
      motion: @ReferenceField Motion, ['discussion']
      # $slice in the projection is not supported by Meteor, so we fetch all changes and manually read the latest entry.
      value: @GeneratedField 'self', ['changes'], (fields) ->
        [fields._id, fields.changes?[fields.changes?.length - 1]?.value or '']
    triggers: =>
      updatedAt: share.UpdatedAtTrigger ['changes'], true
      computeTally: @Trigger ['motion', 'changes'], (document, oldDocument) ->
        for motionId in _.uniq([doc?.motion?._id, oldDocument?.motion?._id]) when motionId
          new ComputeTallyJob(motion: _id: motionId).enqueue
            skipIfExisting: true

  @VALUE: VotingEngine.VALUE

  # Vote should be published only to its author.
  @PUBLISH_FIELDS: ->
    _id: 1
    createdAt: 1
    updatedAt: 1
    author: 1
    motion: 1
    value: 1
