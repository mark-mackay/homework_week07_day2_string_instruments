const instrumentData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');
document.addEventListener('DOMContentLoaded', () => {
    const instrumentsDataModel = new InstrumentFamilies(instrumentData);
    instrumentsDataModel.bindEvents();

    const menu = document.querySelector('select#instrument-families');
    const selectView = new SelectView(menu);
    selectView.bindEvents();

    const detailsContainer = document.querySelector('section.instrument-details');
    const instrumentDetailsView = new InstrumentInfoView(detailsContainer);
    instrumentDetailsView.bindEvents();
    const instrumentDataSource = new InstrumentFamilies();
    instrumentDataSource.bindEvents();
});
