function formatLabel(name: string) {
  return name.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

export { formatLabel }
