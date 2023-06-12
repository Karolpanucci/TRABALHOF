const db = require("../db");

class Produto {
  static async select() {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM produtos"
      return await connect.query(sql);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }
  static async selectOne(codigo) {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM produtos WHERE id=$1";
      return await connect.query(sql,[id]);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async insert(data) {
    try {
      const connect = await db.connect();
      const sql = "INSERT INTO produto(codigo, titulo, dateCadastro, preco, descricao, imagen) VALUES ($1, $2, $3, $4, $5, $6) RETURNING codigo, titulo, dateCadastro, preco, descricao, imagen;";
      const values = [data.codigo, data.titulo, data.dateCadastro, data.preco, data.descricao, data.imagen];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em insert:', error);
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const connect = await db.connect();
      const sql = "";
      const values = [data.nome, data.idade, data.uf, id];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em update:', error);
      throw error;
    }
  }

  static async delete(codigo) {
    try {
      const connect = await db.connect();
      const sql = "DELETE FROM produto WHERE codigo=$1";
      return await connect.query(sql, [codigo]);
    } catch (error) {
      console.error('Erro em delete:', error);
      throw error;
    }
  }
}

module.exports = Pessoa;
