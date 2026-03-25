export  function TableHeading({
    headings,
}){
    return(
            <thead   className="bg-white" >
                <tr>
                    {
                        headings.map((heading) => {
                            return <th  className="border whitespace-nowrap border-black px-2">
                                        {heading}
                                    </th>
                        })
                    }
                </tr>
            </thead>
        
    )
}
export function TableBody({
    studentList,
}){
    return(
        <tbody className="bg-white">
            {
                studentList.map((row) => {
                    return <tr>
                        {
                            row.map((field) => {
                                return <td>field</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    )
}