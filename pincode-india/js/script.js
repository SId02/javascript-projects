   document.querySelector("#PinForm").addEventListener('submit', getLocationInfo);

        function getLocationInfo(e){
            e.preventDefault();

            //Get Pincode value from input
            const Pin = document.querySelector(".Pin").value;

            //Make request using FetchAPI to Zippopotam
            fetch(`http://api.zippopotam.us/IN/${Pin}`)
                .then(response => {
                    if (response.statusText != "OK") {
                        //Change Icon
                        showIcon('remove');

                        document.querySelector(".output").innerHTML = `
                        <article class="message is-danger">
                            <div class="message-header">
                                <p>Oops!!</p>
                            </div>
                            <div class="message-body">
                                Invalid Pincode, please check again
                            </div>
                        </article>`;
                        throw Error(response.statusText );
                    } else {
                        showIcon('check');
                        return response.json();   
                    }
                })
                .then(data => {
                    let state = data.places[0]['state abbreviation'];

                    let totalCities = data.places.length;
                    //Show Location Info
                    let output = `Total number of cities with this Pincode are: <strong> ${totalCities} </strong> and state abbreviation is: <strong> ${state} </strong><br><br> `;
                    console.log(totalCities);
                    data.places.forEach(place => {
                        output += `
                        <article class="message is-success">
                            <div class="message-header">
                                <p>Location Info</p>
                            </div>
                            <div class="message-body">
                                <ul>
                                    <li><strong>City: </strong>${place['place name']}</li>
                                    <li><strong>State: </strong>${place['state']}</li>
                                    <li><strong>Longitude: </strong>${place['longitude']}</li>
                                    <li><strong>Latitude: </strong>${place['latitude']}</li>
                                </ul>
                            </div>
                        </article>`; 
                    document.querySelector('.output').innerHTML = output;
                    })
                })
                .catch(err => console.log(err));
            }     

            function showIcon(icon) {
                //Clear icons
                document.querySelector('.icon-remove').style.display = "none";
                document.querySelector('.icon-check').style.display = "none";

                //Show Current icon
                document.querySelector(`.icon-${icon}`).style.display = "inline-flex";
            }