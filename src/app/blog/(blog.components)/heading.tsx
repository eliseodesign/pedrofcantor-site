type HeadingProps = {
  children: any,
  level: number
}

export default function Heading({ children, level }: HeadingProps) {
  switch (level) {
      case 1:
          return <h1 id={children}>{children}</h1>
      case 2:
          return <h2 id={children}>{children}</h2>
      case 3:
          return <h3 id={children}>{children}</h3>
      case 4:
          return <h4 id={children}>{children}</h4>
      case 5:
          return <h5 id={children}>{children}</h5>
      case 6:
          return <h6 id={children}>{children}</h6>
      default:
          <div id={children}>{children}</div>
  }
}