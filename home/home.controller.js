class HomeCtrl {
  constructor($scope, $http) {
    'ngInject';

    this.name = 'Covid Demo';
    let url = 'https://covid19.mathdro.id/api';
    //var CountryName = $scope.country;

    $http.get(url).then(
      (response) => {
        this.covidData = response.data;
        console.log(response.data);
      },
      (error) => {
        alert('Not valid request!');
      }
    );
    $scope.searchbyCountry = () => {
      debugger;
      console.log($scope.country);
      //Get data by counrty
      let cUrl = `${url}/countries/${$scope.country}`;
      $http.get(cUrl).then(
        (response) => {
          this.covidDataByCountry = response.data;
        },
        (error) => {
          console.log(cUrl);
          console.log('Not valid request!');
        }
      );
    };
  }
}

export default HomeCtrl;
