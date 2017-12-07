class ListingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: props.listings,
      filters: {
        bedrooms: [],
        bathrooms: [],
        price: [],
        parking: false
      }
    }
  }

  render() {
    const { listings, filters } = this.state;

    return (
      <div className='ListingsPage_container'>
        <div className='page_header'>
          <h3>Listings</h3>
        </div>
        <div className='page_body'>
          <ListingsFilters
            filters={filters}
            applyFilter={this.applyFilter.bind(this)}
            updateFilter={this.updateFilter.bind(this)}
          />
          <ListingsList
            listings={listings}
          />
        </div>
      </div>
    );
  }

  updateFilter(filter, value) {
    let { filters } = this.state;
    filters[filter] = value;
    console.log(filters[filter]);
    this.setState({filters});
  }

  applyFilter() {
    let { filters } = this.state;

    $.ajax({
      url: '/apply_filter',
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({filters}),
      success: (response) => {
        // updating state
        this.setState({
          listings: response.listings
        })
      },
      error: (err) => {
        debugger;
        alert(err.message || 'Internal Server Error');
        // Add code here
      }
    })
  }
}
