

For details, please see https://bowride.github.io/

Getting Started
---
First, [install Meteor](https://www.meteor.com/install).

Second, go to [https://github.com/bowride/bowride](https://github.com/bowride/bowride), and click the "Use this template" button. Complete the dialog box to create a new repository that you own that is initialized with this template's files.

Third, go to your newly created repository, and click the "Clone or download" button to download your new GitHub repo to your local file system.  Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.

Fourth, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

```
$ meteor npm install
```

Last, get a Google Maps API key by following the guide at [https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key) and place it in the [GoogleMaps.jsx file](https://github.com/bowride/bowride/blob/master/app/imports/ui/pages/GoogleMaps.jsx) where it says API_KEY_HERE.

```jsx harmony
export default class SimpleMap extends Component{

  render() {
    return (

        <div className='ui center aligned container' style={{height: '80vh', width: '80vw'}}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'API_KEY_HERE'}}
            defaultCenter={{lat: 21.298872, lng: -157.817204}}
            defaultZoom={ 16 }
        >
          <Marker
              lat={21.298872}
              lng={-157.817204}
              text={'Pick-Up Location'}
          />
        </GoogleMapReact>
        </div>
    );
  }

}
```

## Running the system

Once the libraries are installed, you can run the application by invoking the "start" script in the [package.json file](https://github.com/bowride/bowride/blob/master/app/package.json):

```
$ meteor npm run start
```

