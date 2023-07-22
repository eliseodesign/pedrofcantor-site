export default function TableOfContents({ tableOfContents }: any) {
  const items: any[] = tableOfContents.filter(
      (item: any) => item.level === 1 || item.level === 2 || item.level === 3
  );

  return (
      <div>
          <div>Contenido</div>
          <ul>
              {items.map((item) => {
                  const href = `#${item.title}`;
                  return (
                      <li
                          key={item.title}
                      >
                          <a href={href}>
                              {item.title}
                          </a>
                      </li>
                  );
              })}
          </ul>
      </div>
  )
}