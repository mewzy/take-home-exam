class ListingsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listings } = this.props;

    return (
      <div className='ListingList_container'>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Address</td>
              <td>Lat</td>
              <td>Lng</td>
              <td>Bedrooms</td>
              <td>Bathrooms</td>
              <td>Price</td>
              <td>Parking</td>
              <td>Building ID</td>
            </tr>
          </thead>
          <tbody>
            {
              listings.map((listing, index) => (
                <tr key={listing.id}>
                  <td>{index + 1}</td>
                  <td>{listing.name}</td>
                  <td>{listing.address}</td>
                  <td>{listing.lat}</td>
                  <td>{listing.lng}</td>
                  <td>{listing.bedrooms}</td>
                  <td>{listing.bathrooms}</td>
                  <td>{this.formatNumber(listing.price)}</td>
                  <td>{listing.parking ? 'Available' : 'None'}</td>
                  <td>{listing.building_id}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }

  formatNumber(x, shortened) {
    if (!x && x !== 0) return '-';
    if (x.toString().indexOf('.') == -1) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else {
      let integer = Number(x.toString().split('.')[0]);
      let decimal = Number(x.toString().split('.')[1]);
      integer = Utils.numberWithCommas(integer);
      return `${integer}.${decimal}`
    }
  }
}
