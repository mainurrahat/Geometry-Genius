// btn ta kaj korano lagbe
// input gula nithe hobe

function calculateTriangleArea() {
  const Triangle_base_input = document.getElementById("Triangle_base");
  const Triangle_base_text = Triangle_base_input.value;
  const base = parseFloat(Triangle_base_text);
  console.log(base);
  const Triangle_height_input = document.getElementById("Triangle_height");
  const Triangle_height_text = Triangle_height_input.value;
  const height = parseFloat(Triangle_height_text);
  console.log(height);
  const area = 0.5 * base * height;
  console.log("area of the triangle is:", area);
  const Triangle_area_span = document.getElementById("Triangle_area");
  Triangle_area_span.innerText = area;
}
// first e input tag ta dhortechi
// then tag ta theke value ta nicchi
// tarpor value ta number e nicchi

function calculateRectangleArea() {
  const Rectangle_base_input = document.getElementById("Rectangle_width");
  const Rectangle_base_text = Rectangle_base_input.value;
  const width = parseFloat(Rectangle_base_text);
  console.log(width);
  const Rectangle_height_input = document.getElementById("Rectangle_length");
  const Rectangle_height_text = Rectangle_height_input.value;
  const length = parseFloat(Rectangle_height_text);
  console.log(length);
  const area = width * length;
  console.log("area of the Rectangle is:", area);
  const Rectangle_area_span = document.getElementById("Rectangle_area");
  Rectangle_area_span.innerText = area;
}

function calculateParallelogramArea() {
  const parallelogram_base_input =
    document.getElementById("parallelogram_Base");
  const parallelogram_base_text = parallelogram_base_input.value;
  const Base = parseFloat(parallelogram_base_text);
  console.log(Base);
  const parallelogram_height_input = document.getElementById(
    "parallelogram_height"
  );
  const parallelogram_height_text = parallelogram_height_input.value;
  const height = parseFloat(parallelogram_height_text);
  console.log(height);
  const area = Base * height;
  console.log("area of the parallelogram is:", area);
  const parallelogram_area_span = document.getElementById("parallelogram_area");
  parallelogram_area_span.innerText = area;
}

function calculaterhombusArea() {
  const rhombus_d1_input = document.getElementById("rhombus_d1");
  const rhombus_d1_text = rhombus_d1_input.value;
  const d1 = parseFloat(rhombus_d1_text);
  console.log(d1);
  const rhombus_d2_input = document.getElementById("rhombus_d2");
  const rhombus_d2_text = rhombus_d2_input.value;
  const d2 = parseFloat(rhombus_d2_text);
  console.log(d2);
  const area = 0.5 * d1 * d2;
  console.log("area of the Rectangle is:", area);
  const rhombus_area_span = document.getElementById("rhombus_area");
  rhombus_area_span.innerText = area;
}
function calculatePentagonArea() {
  const pentagon_p_input = document.getElementById("pentagon_P");
  const pentagon_p_text = pentagon_p_input.value;
  const p = parseFloat(pentagon_p_text);
  console.log(p);
  const pentagon_b_input = document.getElementById("pentagon_B");
  const pentagon_b_text = pentagon_b_input.value;
  const b = parseFloat(pentagon_b_text);
  console.log(b);
  const area = 0.5 * p * b;
  console.log("area of the Rectangle is:", area);
  const pentagon_area_span = document.getElementById("pentagon_area");
  pentagon_area_span.innerText = area;
}
function calculateEllipseArea() {
  const Ellipse_A_input = document.getElementById("Ellipse_A");
  const Ellipse_A_text = Ellipse_A_input.value;
  const A = parseFloat(Ellipse_A_text);
  console.log(A);
  const Ellipse_B_input = document.getElementById("Ellipse_B");
  const Ellipse_B_text = Ellipse_B_input.value;
  const B = parseFloat(Ellipse_B_text);
  console.log(B);
  const area = 3.1416 * A * B;
  console.log("area of the Rectangle is:", area);
  const Ellipse_area_span = document.getElementById("Ellipse_area");
  Ellipse_area_span.innerText = area;
}
