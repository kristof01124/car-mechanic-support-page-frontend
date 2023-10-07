import "./PageLayout.css"

interface PageLayoutProps {
    title: String
}

export function PageLayout(props: React.PropsWithChildren<PageLayoutProps>) {
    return (
        <div className="pageLayout">
            <div className="pageLayoutHeader">
                {props.title}
            </div>
            <div className="pageLayoutBody">
                {props.children}
            </div>
        </div>
    )

}