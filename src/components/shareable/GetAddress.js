import { Box, Stack, Text } from '@chakra-ui/react';
import React, { Component } from 'react';

//Set your Google Maps key here or use enviroment variables 
const { REACT_APP_GOOGLE_API_KEY } = process.env;

export class GetAddress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            userAddress: 'Waiting...',
        }

        //Instead of manually binding you can use arrow functions to remove boilerplate code
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.geocodeCoordinates = this.geocodeCoordinates.bind(this);
        this.handleLocationError = this.handleLocationError.bind(this);
    }

    render() {

        return (
            <div>
                <Stack spacing={2}>

                    <Text fontSize="md">
                        Address:
                    </Text>

                    <Text fontSize="md">
                        {this.state.userAddress}
                    </Text>

                    <Box display="grid" placeItems="center">
                        {
                            this.state.latitude && this.state.longitude
                                ? <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=15&maptype=roadmap&size=350x350&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${REACT_APP_GOOGLE_API_KEY}`} alt='' />
                                : null
                        }
                    </Box>

                </Stack>
            </div>

        );

    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        })
        this.geocodeCoordinates();
    }

    geocodeCoordinates() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=${REACT_APP_GOOGLE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                //Update current address field on the website with user's address
                this.setState({
                    userAddress: data.results[0].formatted_address
                })
            })
            .catch(error => alert(error))
    }

    handleLocationError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:

                ///Set a second method to get user's location based on his IP if tracking is available
                fetch('http://ip-api.com/json/?lang=en')
                    .then(response => response.json())
                    .then(data => {
                        this.setState({
                            longitude: data.lon,
                            latitude: data.lat,
                        })
                        this.geocodeCoordinates();
                    })
                    .catch(err => alert("We're unable to get your location 😢\nVerify if you have disabled tracking or if you blocked the website to get your location"));
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable 👾");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred");
                break;
            default:
                alert("An unknown error occurred.");
        }
    }

    componentDidMount() {
        this.getLocation();
    }

}

export default GetAddress;