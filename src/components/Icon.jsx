function Icon({ name }) {
  const icons = {
    arrow: (
      <path d="M4 12h14M12 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    ),
    burger: (
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    ),
    chevron: (
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
    tag: (
      <path d="M4 5h8l7 7-7 7-8-8V5Zm5 5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
    vk: <text x="5" y="16" fontSize="8" fontWeight="700" fill="currentColor">vk</text>,
    tg: <path d="M4 12 20 5l-4 14-4-4-3 3 1-5-6-1Z" fill="currentColor" />,
    tw: <path d="M19 7.5c-.6.3-1.2.4-1.9.5.7-.4 1.1-1 1.4-1.8-.6.4-1.3.6-2.1.8A3.2 3.2 0 0 0 11 9.9c0 .3 0 .5.1.7A9.1 9.1 0 0 1 4.5 7.2a3.2 3.2 0 0 0 1 4.3c-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.8 2.5 3.1-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2A6.5 6.5 0 0 1 4 17.8h-.8A9.2 9.2 0 0 0 8.2 19c6 0 9.3-5 9.3-9.3v-.4c.6-.5 1.1-1 1.5-1.8Z" fill="currentColor" />,
    star: <path d="m12 3 2.4 5 5.5.8-4 3.9.9 5.5-4.8-2.6-4.8 2.6.9-5.5-4-3.9 5.5-.8L12 3Z" fill="currentColor" />,
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  )
}

export default Icon
