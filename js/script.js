document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelector('.productos');
    const carritoLista = document.getElementById('carrito-lista');
    const totalSpan = document.getElementById('total');
  
    let total = 0;
  
    const data = [
      { nombre: 'Labial Rosa', precio: 20 },
      { nombre: 'Base Líquida', precio: 35 },
      { nombre: 'Rímel Volumen', precio: 28 }
    ];
  
    data.forEach(prod => {
      const div = document.createElement('div');
      div.innerHTML = `
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
  