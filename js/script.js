document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelector('.productos');
    const carritoLista = document.getElementById('carrito-lista');
    const totalSpan = document.getElementById('total');
    const vaciarBtn = document.getElementById('vaciar');

vaciarBtn.addEventListener('click', () => {
  carritoLista.innerHTML = ''; // Limpia la lista
  total = 0;                   // Reinicia el total
  totalSpan.textContent = total;
});

  
    let total = 0;
  
    const data = [
        { nombre: 'Labial Rosa', precio: 20.000, imagen: './images/labial rosa.jpg' },
        { nombre: 'Base Líquida', precio: 35.000, imagen: './images/base liquida.avif' },
        { nombre: 'Rímel Volumen', precio: 28.000, imagen: './images/rimel volumen.avif' }
      ];
      
  
    data.forEach(prod => {
      const div = document.createElement('div');
      div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}" style="width: 120px; height: auto;">
      <h3>${prod.nombre}</h3>
      <p>$${prod.precio}</p>
      <button>Agregar</button>
    `;
    
  
      const btn = div.querySelector('button');
      btn.addEventListener('click', () => {
        // Agrega producto al carrito
        const li = document.createElement('li');
        li.textContent = `${prod.nombre} - $${prod.precio}`;
        carritoLista.appendChild(li);
  
        // Actualiza total
        total += prod.precio;
        totalSpan.textContent = total;
      });
  
      productos.appendChild(div);
    });
  });
  