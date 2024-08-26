let isMapActive = true;





function toggleView() {
  const toggleBtn = document.getElementById("toggleViewBtn");
  if (isMapActive) {
    document.getElementById("museumList").scrollIntoView();
  } else {
    window.scrollTo(0, 0);
  }
  isMapActive = !isMapActive;
}
let map;
let infowindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31.231706, lng: 121.472644 },
    zoom: 5,
  });

  infowindow = new google.maps.InfoWindow();

  let markerCount = 1;

  museums.forEach((museum) => {
    const icon = {
      url: "icon/" + markerCount + ".png",
      scaledSize: new google.maps.Size(30, 30),
    };

    const marker = new google.maps.Marker({
      position: museum.location,
      map: map,
      title: museum.name,
      icon,
    });

    marker.addListener("click", () => {
      infowindow.setContent(
        "<div><strong>" +
          museum.name +
          "</strong><br>" +
          "<a href='#' onclick=\"showModal('" +
          museum.name +
          "','" +
          museum.address +
          "','" +
          museum.description +
          "','" +
          "images/" +
          museum.images +
          "')\">查看详情</a></div>"
      );
      infowindow.open(map, marker);
    });
    markerCount++;
  });
}
function showModal(name, location, description, imageUrl) {
  var modal = document.getElementById("myModal");
  modal.style.display = "flex";

  document.getElementById("modal-title").textContent = name;
  document.getElementById("modal-text").innerHTML = `
    <h3 class="text-center">${location}</h3>
    <br><img src="${imageUrl}" alt="${name}" class="modal-image mx-auto">
    <p class="text-center my-4">${description}</p>
  `;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function populateMuseumList() {
  const list = document.getElementById("museumList");
  museums.forEach((museum) => {
    const li = document.createElement("li");
    li.className = "py-4 flex justify-between items-center";
    li.innerHTML = `
              <div>
                  <p class="text-lg font-semibold">${museum.name}</p>
                  <p class="text-sm text-gray-600">${museum.address}</p>
              </div>
              <button onclick="showModal('${museum.name}', '${museum.address}', '${museum.description}', 'images/${museum.images}')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
              </button>
          `;
    list.appendChild(li);
  });
}
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

window.onload = populateMuseumList;