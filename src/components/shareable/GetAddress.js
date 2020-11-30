import React, { Component } from 'react';

const { REACT_APP_GOOGLE_API_KEY } = process.env;

const axios = require("axios");

class GetAddress extends Component {


    constructor() {
        super();

        this.state = { coordenates: 'Loading...', latitude: 'Loading...', longitude: 'Loading...' }
    }

    render() {

        return (
            <div>
                {/* {this.GetLocation(this.state.latitude, this.state.longitude)} */}
                Longitude: {this.state.longitude}
                <br />
                Latitude: {this.state.latitude}
                <br />
                Coordenates: {this.state.coordenates}
            </div>

        );

    }

    GetLocation = async (latitude, longitude) => {

        if (latitude && longitude) {
            var response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?'
                + 'latlng=' + latitude + ',' + longitude + '&key=' + REACT_APP_GOOGLE_API_KEY);


            console.log(response.data);
            ///Verify if google geolocation api have found user's location
            response = await response.data.results[0].formatted_address
                ? response.data.results[0].formatted_address
                : 'I could not get your location 😥';


            this.setState = ({
                latitude: latitude,
                longitude: longitude,
                //coordenates: response.toString(),
            }, () => {
                console.log('Inside callback>: '+ response);
            });
        }
        else
            console.log("Loading data...");

    }

    async componentDidMount() {
        // let response;

        // await axios.get('http://ip-api.com/json/?lang=pt-BR').then((result) => {

        //     response = result.data;
        //     this.setState({
        //         latitude: 20,
        //         coordenates: result.data,
        //     });
        //     console.log(latitude);
        //     console.log('Coordenadas: ' + coordenates);
        // }).catch((err) => {
        //     console.log('Mensagem de erro: ' + err);
        //     response = false;
        // });

        // console.log(response);

        if (navigator.geolocation) {
            // check if geolocation is supported/enabled on current browser
            await navigator.geolocation.getCurrentPosition(
                (position) => {

                    // for when getting location is a success
                    this.GetLocation(position.coords.latitude, position.coords.longitude);

                }
            );
            return true;
        }


        // geolocation is not supported
        // get your location some other way
        //alert('O serviço de Geolocalização não está habilitado para o seu navegador.')

    }

    // async ipLookUp() {
    //     let response;

    //     await axios.get('http://ip-api.com/json/?lang=pt-BR').then((result) => {

    //         response = result.data;
    //         console.log(response);

    //     }).catch((err) => {
    //         console.log('Mensagem de erro: ' + err);
    //         response = false;
    //     });

    //     console.log(response);

    // }
}

export default GetAddress;