

try {
    const response = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature');
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const data = await response.json();
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.querySelector('#author').textContent = `By: ${data.user.name}`;
} catch (error) {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzU0MjU4Mjh8&ixlib=rb-4.0.3&q=85')";
    document.querySelector('#author').textContent = "By: Thanh Pham";
}

try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/dogecoin`);
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const data = await response.json();
    const dogecoinHtml = `
            <div id="crypto-item" class="crypto-item">
                    <div id="image-name" class="image-name">
                        <div id="image" class="image">
                            <img src="${data.image.small}"
                                alt="${data.name}">
                        </div>
                        <div id="name" class="name">${data.name}</div>
                    </div>
                    <div id="current-price" class="current-price">🎯: $${data.market_data.current_price.usd}</div>
                    <div id="hight-24h" class="hight-24h">👆: $${data.market_data.high_24h.usd}</div>
                    <div id="low-24h" class="low-24h">👇: $${data.market_data.low_24h.usd}</div>
                </div>
        `;
    document.querySelector('#crypto-list').innerHTML = dogecoinHtml;
} catch (error) {
    console.error(error);
}


navigator.geolocation.getCurrentPosition(async position => {
    try {
        const { latitude, longitude } = position.coords;
        const response = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&unit=imperial`);
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        const weatherHtml = `
            <div id="icon-temp" class="icon-temp">
                <img id="icon" class="icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
                <h2 id="temp" class="temp">${data.main.temp}°C</h2>
            </div>
            <div id="city" class="city">${data.name}</div>
        `;
        document.querySelector('#weather').innerHTML = weatherHtml;
    } catch (error) {
        console.error(error);
    }
});

function showTime() {
    const now = new Date();
    const currentTimeString = now.toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric", hour12: true });
    document.querySelector('#time').textContent = `${currentTimeString}`;
}

setInterval(showTime, 1000);




