import React, { useState } from "react";
import { PageContext, PageContextType, Pages } from "./PageContext";

interface PageProviderProps {
    children: React.ReactNode;
}

const PageProvider = ({ children } : PageProviderProps) => {
	const [currentPage, setCurrentPage] = useState(Pages.Party);

	const value: PageContextType = {
		currentPage,
		setCurrentPage
	}

    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    )
}

export default PageProvider;