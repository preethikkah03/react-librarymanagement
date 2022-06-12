


export default function PriceCard()
{
    return( <div className="container tab-pane fade">
    <div className="container bg-light">
      <h3>Price Card</h3>
               
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Price</th>
             </tr>
        </thead>
        <tbody>
          <tr>
            <td> The Alchemist</td>
            <td>Rs.399</td>
           </tr>
          <tr>
            <td>The Origin</td>
            <td>Rs.299</td>
          </tr>
          <tr>
            <td>Angels and demon</td>
            <td>Rs.599</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>)
}