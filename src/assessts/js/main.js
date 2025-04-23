function loadHTML(id, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error('Fetch error');
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading', file, error);
      });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', '/components/Header/header.html');
    loadHTML('footer', '/components/Footer/footer.html');
  });
  
  