Berikut adalah tabel yang lebih lengkap dengan 50 perintah penting untuk berinteraksi dengan MySQL melalui Command Prompt (CMD):

| No  | Script                                                                     | Penjelasan                                                                                                              |
| --- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1   | `mysql -u username -p`                                                     | Masuk ke shell MySQL dengan menggunakan username tertentu. Anda akan diminta untuk memasukkan password MySQL.           |
| 2   | `exit`                                                                     | Keluar dari shell MySQL dan kembali ke Command Prompt.                                                                  |
| 3   | `SHOW DATABASES;`                                                          | Menampilkan daftar database yang tersedia di server MySQL.                                                              |
| 4   | `CREATE DATABASE nama_database;`                                           | Membuat database baru dengan nama yang ditentukan.                                                                      |
| 5   | `DROP DATABASE nama_database;`                                             | Menghapus database yang ditentukan beserta semua tabel dan data yang terkait.                                           |
| 6   | `USE nama_database;`                                                       | Menggunakan database tertentu untuk digunakan dalam sesi saat ini.                                                      |
| 7   | `SHOW TABLES;`                                                             | Menampilkan daftar tabel yang ada dalam database yang sedang digunakan.                                                 |
| 8   | `DESCRIBE nama_tabel;`                                                     | Menampilkan struktur tabel yang ditentukan.                                                                             |
| 9   | `SELECT * FROM nama_tabel;`                                                | Menampilkan semua data dalam tabel yang ditentukan.                                                                     |
| 10  | `INSERT INTO nama_tabel (kolom1, kolom2) VALUES (nilai1, nilai2);`         | Memasukkan data baru ke dalam tabel yang ditentukan.                                                                    |
| 11  | `UPDATE nama_tabel SET kolom1=nilai1 WHERE kondisi;`                       | Memperbarui data dalam tabel yang ditentukan berdasarkan kondisi yang diberikan.                                        |
| 12  | `DELETE FROM nama_tabel WHERE kondisi;`                                    | Menghapus data dari tabel yang ditentukan berdasarkan kondisi yang diberikan.                                           |
| 13  | `DROP TABLE nama_tabel;`                                                   | Menghapus tabel yang ditentukan dari database yang sedang digunakan.                                                    |
| 14  | `ALTER TABLE nama_tabel ADD kolom TipeData;`                               | Menambahkan kolom baru ke dalam tabel yang ditentukan.                                                                  |
| 15  | `ALTER TABLE nama_tabel DROP COLUMN nama_kolom;`                           | Menghapus kolom dari tabel yang ditentukan.                                                                             |
| 16  | `ALTER TABLE nama_tabel MODIFY COLUMN nama_kolom TipeData;`                | Mengubah tipe data kolom dalam tabel yang ditentukan.                                                                   |
| 17  | `CREATE INDEX idx_nama_kolom ON nama_tabel (nama_kolom);`                  | Membuat indeks pada kolom tertentu dalam tabel yang ditentukan.                                                         |
| 18  | `DROP INDEX idx_nama_kolom ON nama_tabel;`                                 | Menghapus indeks dari kolom tertentu dalam tabel yang ditentukan.                                                       |
| 19  | `SHOW INDEX FROM nama_tabel;`                                              | Menampilkan indeks yang ada pada tabel yang ditentukan.                                                                 |
| 20  | `GRANT permissions ON database.* TO 'username'@'host';`                    | Memberikan izin kepada pengguna tertentu untuk database yang ditentukan.                                                |
| 21  | `REVOKE permissions ON database.* FROM 'username'@'host';`                 | Mencabut izin yang diberikan kepada pengguna tertentu untuk database yang ditentukan.                                   |
| 22  | `FLUSH PRIVILEGES;`                                                        | Memuat ulang daftar izin pengguna yang disimpan dalam tabel izin.                                                       |
| 23  | `SHOW GRANTS FOR 'username'@'host';`                                       | Menampilkan izin yang diberikan kepada pengguna tertentu.                                                               |
| 24  | `CREATE USER 'username'@'host' IDENTIFIED BY 'password';`                  | Membuat pengguna baru dengan nama pengguna dan kata sandi tertentu.                                                     |
| 25  | `DROP USER 'username'@'host';`                                             | Menghapus pengguna yang ditentukan.                                                                                     |
| 26  | `ALTER USER 'username'@'host' IDENTIFIED BY 'new_password';`               | Mengubah kata sandi pengguna yang ditentukan.                                                                           |
| 27  | `SHOW PROCESSLIST;`                                                        | Menampilkan daftar proses yang sedang berjalan dalam server MySQL.                                                      |
| 28  | `KILL id_proses;`                                                          | Menghentikan proses dengan ID tertentu yang sedang berjalan.                                                            |
| 29  | `SET GLOBAL variable_nilai = nilai;`                                       | Mengatur nilai variabel sistem MySQL secara global.                                                                     |
| 30  | `SHOW VARIABLES LIKE 'pattern';`                                           | Menampilkan nilai variabel sistem MySQL yang cocok dengan pola tertentu.                                                |
| 31  | `CREATE VIEW nama_view AS SELECT kolom FROM nama_tabel WHERE kondisi;`     | Membuat tampilan baru dari data yang ada dalam tabel.                                                                   |
| 32  | `DROP VIEW nama_view;`                                                     | Menghapus tampilan yang ditentukan.                                                                                     |
| 33  | `CREATE PROCEDURE nama_prosedur (parameter) BEGIN ... END;`                | Membuat prosedur tersimpan (stored procedure) dalam MySQL.                                                              |
| 34  | `DROP PROCEDURE nama_prosedur;`                                            | Menghapus prosedur tersimpan yang ditentukan.                                                                           |
| 35  | `CALL nama_prosedur(parameter);`                                           | Memanggil prosedur tersimpan yang ditentukan dengan parameter tertentu.                                                 |
| 36  | `CREATE FUNCTION nama_fungsi (parameter) RETURNS tipe_data BEGIN ... END;` | Membuat fungsi tersimpan (stored function) dalam MySQL.                                                                 |
| 37  | `DROP FUNCTION nama_fungsi;`                                               | Menghapus fungsi tersimpan yang ditentukan.                                                                             |
| 38  | `SELECT COUNT(*) FROM nama_tabel;`                                         | Menghitung jumlah baris dalam tabel yang ditentukan.                                                                    |
| 39  | `SELECT DISTINCT kolom FROM nama_tabel;`                                   | Menampilkan nilai unik dari kolom tertentu dalam tabel yang ditentukan.                                                 |
| 40  | `SELECT kolom1, kolom2 FROM nama_tabel LIMIT jumlah;`                      | Menampilkan sejumlah baris tertentu dari tabel yang ditentukan.                                                         |
| 41  | `SELECT * FROM nama_tabel WHERE kondisi ORDER BY kolom ASC/DESC;`          | Menampilkan data dari tabel yang ditentukan berdasarkan kondisi tertentu dan mengurutkannya berdasarkan kolom tertentu. |
| 42  |

`SELECT * FROM nama_tabel WHERE kolom LIKE 'nilai%';` | Menampilkan data dari tabel yang ditentukan di mana nilai kolom cocok dengan pola tertentu. |
| 43 | `SELECT * FROM nama_tabel WHERE kolom BETWEEN nilai1 AND nilai2;` | Menampilkan data dari tabel yang ditentukan di mana nilai kolom berada di antara dua nilai tertentu. |
| 44 | `SELECT * FROM nama_tabel WHERE kolom IS NULL;` | Menampilkan data dari tabel yang ditentukan di mana nilai kolom adalah NULL. |
| 45 | `SELECT * FROM nama_tabel WHERE kolom IS NOT NULL;` | Menampilkan data dari tabel yang ditentukan di mana nilai kolom bukan NULL. |
| 46 | `SELECT * FROM nama_tabel WHERE kondisi GROUP BY kolom;` | Menampilkan data dari tabel yang ditentukan yang dikelompokkan berdasarkan nilai kolom tertentu. |
| 47 | `SELECT * FROM nama_tabel1 JOIN nama_tabel2 ON nama_tabel1.kolom = nama_tabel2.kolom;` | Menggabungkan dua tabel berdasarkan nilai kolom yang cocok. |
| 48 | `SELECT * FROM nama_tabel1 LEFT JOIN nama_tabel2 ON nama_tabel1.kolom = nama_tabel2.kolom;` | Melakukan left join antara dua tabel berdasarkan nilai kolom yang cocok. |
| 49 | `SELECT * FROM nama_tabel1 RIGHT JOIN nama_tabel2 ON nama_tabel1.kolom = nama_tabel2.kolom;` | Melakukan right join antara dua tabel berdasarkan nilai kolom yang cocok. |
| 50 | `SELECT * FROM nama_tabel1 FULL JOIN nama_tabel2 ON nama_tabel1.kolom = nama_tabel2.kolom;` | Melakukan full join antara dua tabel berdasarkan nilai kolom yang cocok. |

Pastikan untuk mengganti `username`, `nama_database`, `nama_tabel`, `kolom`, `nilai`, `kondisi`, `host`, `password`, `new_password`, `id_proses`, `variable_nilai`, `pattern`, `nama_view`, `parameter`, `nama_prosedur`, `nama_fungsi`, `jumlah`, dan `tipe_data` sesuai dengan kebutuhan Anda saat menggunakan sintaks ini di Command Prompt.
