class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :submitter, :body, :vehicle_id
end
