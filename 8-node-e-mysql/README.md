## Criação de bancos em MySQL

```sql
criar banco de dados
CREATE DATABASE <nome_banco>;

verificando banco de dados
SHOW DATABASES

removendo banco de dados
DROP DATABASE <nome_banco>;

exportando banco de dados
mysqldump -u root <nome_banco> > <nome_arquivo>.sql

utilizando banco de dados
USE <nome_banco>;
```