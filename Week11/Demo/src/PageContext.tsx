enum Pages {Party, Monsters};
import { createContext, useContext } from "react";

interface PageContextType {
    currentPage: Pages,
    setCurrentPage: (page: Pages) => void;
}

const PageContext = createContext<PageContextType|null>(null);

const usePage = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePage must be used within a PageContext.Provider");
    }
    return context as PageContextType;
}

export { Pages, PageContext, usePage };    export type { PageContextType };

