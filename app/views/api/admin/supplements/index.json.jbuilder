json.supplements @supplements.each do |supplement|
  json.id supplement.id
  json.created_at l(supplement.created_at, format: :default)
  json.name supplement.name
  json.amount supplement.amount
end


json.partial! partial: '/api/admin/shared/pagination', locals: {
  kind: @supplements,
  callback: 'SupplementStore/index'
}
