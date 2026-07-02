const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

// Frontmatter dates are YYYY/MM/DD or YYYY-MM-DD. Format without timezone drift.
export function formatDate(input) {
  if (!input) return ''
  const [y, m, d] = String(input).split(/[/-]/).map(Number)
  if (!y || !m || !d) return String(input)
  return `${MONTHS[m - 1]} ${d}, ${y}`
}
