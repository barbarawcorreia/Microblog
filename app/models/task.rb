class Task < ApplicationRecord
    validates :nome, presence: true
    validates :signo, presence: true
end
