document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelector('.productos');
  
    const data = [
      { nombre: 'Labial Rosa', precio: 20 },
      { nombre: 'Base Líquida', precio: 35 }
    ];
  
    data.forEach(prod => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${prod.nombre}</h3><p>$${prod.precio}</p><button>Agregar</button>`;
      productos.appendChild(div);
    });
  });
  