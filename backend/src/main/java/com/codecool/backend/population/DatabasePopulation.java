package com.codecool.backend.population;

import com.codecool.backend.model.entity.Company;
import com.codecool.backend.model.entity.Graduate;
import com.codecool.backend.model.entity.Student;
import com.codecool.backend.repository.CompanyRepository;
import com.codecool.backend.repository.WelcomePageRepository;
import com.codecool.backend.repository.StudentRepository;
import com.codecool.backend.service.converter.Base64Converter;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.util.List;

@Configuration
public class DatabasePopulation {

    @Bean
    ApplicationRunner populate(StudentRepository studentRepository, CompanyRepository companyRepository, WelcomePageRepository graduateRepository) {
        return args -> {
            List<Student> students = createStudents();
            studentRepository.saveAll(students);
            List<Company> companies = createCompanies();
            companyRepository.saveAll(companies);
            List<Graduate> graduates = createGraduates();
            graduateRepository.saveAll(graduates);

        };
    }

    private List<Graduate> createGraduates() throws IOException {
        Base64Converter base64Converter = new Base64Converter();
        return List.of(
                new Graduate("Mark", "Hartleib", "Schrack Technik", "Junior ERP Developer", base64Converter.convertImgToBase64String("/home/bernadette/CodeCool-projects/Modul4/CodePool/backend/img/Mark.png")),
                new Graduate("Roman", "Fann", "Smatrics", "Junior Developer", base64Converter.convertImgToBase64String("/home/bernadette/CodeCool-projects/Modul4/CodePool/backend/img/Roman.png"))
        );
    }

    private List<Student> createStudents() {
        return List.of(
                new Student("John Doe", "Description for John Doe", "Project for John Doe", "john_doe.jpg"),
                new Student("Jane Smith", "Description for Jane Smith", "Project for Jane Smith", "jane_smith.jpg"),
                new Student("Michael Johnson", "Description for Michael Johnson", "Project for Michael Johnson", "michael_johnson.jpg"),
                new Student("Emily Davis", "Description for Emily Davis", "Project for Emily Davis", "emily_davis.jpg"),
                new Student("Robert Wilson", "Description for Robert Wilson", "Project for Robert Wilson", "robert_wilson.jpg")
        );
    }

    private List<Company> createCompanies() {
        return List.of(
                new Company("Siemens", "siemens@gmail.com"),
                new Company("ÖBB", "oebb@gmail.com")
        );
    }
}
