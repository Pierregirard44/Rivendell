CREATE TABLE events (
                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        description TEXT,
                        date TIMESTAMP,
                        created_by BIGINT,
                        FOREIGN KEY (created_by) REFERENCES users(id)
);