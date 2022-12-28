import { useMemo } from 'react'

const range = (start: number, end: number) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export default function AppPagination({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
  goToSpecific,
  fetching,
}: {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
  goToSpecific: any
  fetching: boolean
}) {
  const paginationRange = useMemo(() => {
    // const totalPageCount = Math.ceil(totalCount / pageSize); //Utilizando el numero de paginas
    const totalPageCount = totalCount //Utilizando el numero total de paginas

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
            Case 1:
            If the number of pages is less than the page numbers we want to show in our
            paginationComponent, we return the range [1..totalPageCount]
          */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    /*
              Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
          */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    )

    /*
            We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
          */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
              Case 2: No left dots to show, but rights dots to be shown
          */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, 0, totalPageCount]
    }

    /*
              Case 3: No right dots to show, but left dots to be shown
          */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      )
      return [firstPageIndex, 0, ...rightRange]
    }

    /*
              Case 4: Both left and right dots to be shown
          */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, 0, ...middleRange, 0, lastPageIndex]
    }
  }, [totalCount, pageSize, siblingCount, currentPage])
  return (
    <>
      {paginationRange?.map((pages, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pages === 0) {
          return (
            <button
              key={index}
              className="page-item "
              disabled={fetching}
              title=""
            >
              <a
                className={`${
                  currentPage == pages
                    ? 'bg-gray-700 text-white  '
                    : 'bg-transparent text-gray-700  '
                } relative block py-1.5 px-3  outline-none transition-all duration-300 rounded border`}
              >
                &#8230;
              </a>
            </button>
          )
        }

        return (
          <button
            key={index}
            className="page-item cursor-pointer"
            onClick={() => goToSpecific(pages)}
            disabled={fetching}
            title={`Ir a pagina ${pages}`}
          >
            <a
              className={`${
                currentPage == pages
                  ? 'bg-gray-700 text-white  '
                  : 'bg-transparent text-gray-700  hover:text-white hover:bg-app-black'
              } relative block py-1.5 px-3  outline-none transition-all duration-300 rounded border`}
            >
              {pages}
            </a>
          </button>
        )
      })}
    </>
  )
}
