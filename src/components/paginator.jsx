import { ReactComponent as PaginatorPrevious } from "./paginator-previous.svg"
import { ReactComponent as PaginatorNext } from "./paginator-next.svg"


const PaginatorButton = ({ children, page, setPage, activePage, className, type = "fixed" }) => {
    let background = ""
    switch (type) {
        case "previous":
            background = "primary"
            break
        case "next":
            background = "primary"
            break
        case "spacer":
            background = "white"
            break
        case "fixed":
            background = page === activePage ? "primary" : "slate-400"
            break
        default:
            background = "primary"
    }
    const changePage = () => {
        if (type === "fixed") {
            setPage(page)
        }
        else if (type === "previous") {
            if (activePage > 1) {
                setPage(activePage - 1)
            }
        } else if (type === "next") {
            setPage(activePage + 1)
        }
    }
    if (type === "previous") {
        children = PaginatorPrevious
    }
    else if (type === "next") {
        children = PaginatorNext
    }
    if (type === "spacer") {
        children = "..."
    }
    return (
        <div className={`${className ? className : ""} bg-${background} rounded-full`} onClick={changePage}>
            { children }
        </div>
    )
}

export const PaginatorHandler = ({ maxPages = null, page, setPage }) => {
    
    return (
        <div>

        </div>
    )
}

export default PaginatorButton