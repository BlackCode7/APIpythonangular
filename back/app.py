from flask import Flask, Response, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

import mysql.connector
import json

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/DBteste'

db = SQLAlchemy(app)


# Criando a tabela no banco DBteste
class TBteste(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))

    def to_json(self):
        return {
            "id": id,
            "nome": nome
        }

# Comando para criar tabela no banco DBteste
# db.create_all()

# Selecionar tudo
# /usuarios é o nome da rota que pega as informações com methodo GET
@app.route("/usuarios", methods=["GET"])
def selecionar_nomes():
    """
    pegando o objeto definido na classe
    """
    tbteste_objeto = TBteste.query.all()
    tbteste_json = tbteste_objeto.to_json()
    print(tbteste_objeto)
    
    return Response()



# Selecionar um
# Cadastrar
# Atualizar
# Deletar

app.run()