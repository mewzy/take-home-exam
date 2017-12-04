class ListingsFilters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { updateFilter, filters, applyFilter } = this.props;
    const { bedrooms, bathrooms, price, parking } = filters;

    return (
      <div className='ListingFilters_container'>
        <div className='ListingFilters_filter'>
          <span>Bedrooms between </span>
          <input
            type='number'
            value={bedrooms[0]}
            onChange={ e => {
              updateFilter('bedrooms',[e.target.value, bedrooms[1]])
            }}
          />
          <span>and</span>
          <input
            type='number'
            value={bedrooms[1]}
            onChange={ e => {
              updateFilter('bedrooms',[bedrooms[0], e.target.value])
            }}
          />
        </div>
        <div className='ListingFilters_filter'>
          <span>Bathrooms between </span>
          <input
            value={bathrooms[0]}
            type='number'
            onChange={ e => {
              updateFilter('bathrooms',[e.target.value, bathrooms[1]])
            }}
          />
          <span>and</span>
          <input
            value={bathrooms[1]}
            type='number'
            onChange={ e => {
              updateFilter('bathrooms',[bathrooms[0], e.target.value])
            }}
          />
        </div>
        <div className='ListingFilters_filter'>
          <span>Price between </span>
          <input
            value={price[0]}
            type='number'
            onChange={ e => {
              updateFilter('price',[e.target.value, price[1]])
            }}
          />
          <span>and</span>
          <input
            value={price[1]}
            type='number'
            onChange={ e => {
              updateFilter('price',[price[0], e.target.value])
            }}
          />
        </div>
        <div className='ListingFilters_filter'>
          <input
            type='checkbox'
            checked={parking}
            onChange={ e => {
              updateFilter('parking',e.target.checked)
            }}
          />
          <span>Only with Parking</span>
        </div>

        <button
          className='ListingFilters_button-submit'
          onClick={applyFilter}>Apply Filter</button>
      </div>
    );
  }
}
