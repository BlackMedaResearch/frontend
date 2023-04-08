export const maxPage = (totalResults) => {
    let pageCount = 0;
    if (totalResults >= 500) {
      pageCount = 5;
    } else {
      pageCount = Math.ceil(totalResults/100)
    }
    return pageCount
  };