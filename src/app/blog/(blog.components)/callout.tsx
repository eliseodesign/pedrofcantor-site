
type CalloutProps = {
    children: any
    title: string
}

export default function Callout({ children, title }: CalloutProps) {
    return (
        <div>
            <div>{title}</div>
            <div>{children}</div>
        </div>
    )
}