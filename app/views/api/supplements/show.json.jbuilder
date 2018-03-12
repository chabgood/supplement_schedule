json.supplement do
  json.id @supplement.id
  json.name @supplement.name
  json.amount t(@supplement.amount, scope: 'amount')
end
