var viewModel = {
    chartSettings: {
        dataSource: new DevExpress.data.DataSource({
            load: function () {
                var def = $.Deferred();
                $.getJSON('https://sampleservices.devexpress.com/api/Categories').done(function (data) {
                    def.resolve(data);
                });
                return def.promise();
            }
        }),
        series: {
            argumentField: 'CategoryName',
            valueField: 'CategoryID',
            name: 'Categories',
            type: 'bar',
            color: '#ffa500'
        }
    }
}
$(function () {
    ko.applyBindings(viewModel);
});

