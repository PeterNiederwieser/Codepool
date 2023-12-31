package com.codecool.backend.persistence.repository;

import com.codecool.backend.persistence.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "students")
public interface StudentRepository extends JpaRepository <Student, Long> {
}
