export const sumHandler = (arr) =>{
    const sum = arr?.reduce((acc,curr)=>{
       return acc + parseFloat(curr.investmentAmount || curr.amountInvested)
      },0)
      return sum
}

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

export const pdfDownloadHandler = (name) =>{
    const pdfUrl = `/${name}.pdf`;

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${name}.pdf`; // Specify the desired filename

    // Append the link to the document and trigger a click event
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}