
int estado = 0;
int estadoanterior =0;
int salida= 0;

void setup() {
  Serial.begin(9600);
  pinMode(2, INPUT_PULLUP);     // Boton (entrada del pin 2) 
  pinMode(9, OUTPUT);             // LED (salida del pin 9)
}

void loop() {
  estado = digitalRead(2);      // leer el estdo del boton
  if ((estado== LOW)&&(estadoanterior==HIGH)){               // etado del boton bajo, inicia enn 0
    salida =1 - salida;
    //delay (500);
    
    }
    estadoanterior = estado;
    if (salida==1){
    digitalWrite(9, HIGH);          // encendemos el LED       
     }

    else  {
      digitalWrite(9, LOW);

// programacion monitor arduino

}
  if (digitalRead(2) == 0) {
    Serial.println("H");
    delay(500);
  }

  if (Serial.available()) {
    char Letra = Serial.read();
    if (Letra == 'H') {
      digitalWrite(9, HIGH);
    }
    else if (Letra == 'L') {
      digitalWrite(9, LOW);
    }
  }
}
