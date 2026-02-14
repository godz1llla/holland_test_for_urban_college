package riasec.backend.model.classes;

import jakarta.persistence.*;
import riasec.backend.model.interfaces.Test;

import java.util.List;

@Entity
public class HollandCodeTest implements Test {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String title;
    private String titleRu;
    private String titleKz;
    private String description;
    private String descriptionRu;
    private String descriptionKz;
    private Integer version;

    public HollandCodeTest() {
    }

    public HollandCodeTest(String title, String titleRu, String titleKz, String description, String descriptionRu,
            String descriptionKz, Integer version, List<HollandCodeTestQuestion> hollandCodeTestQuestions) {
        this.title = title;
        this.titleRu = titleRu;
        this.titleKz = titleKz;
        this.description = description;
        this.descriptionRu = descriptionRu;
        this.descriptionKz = descriptionKz;
        this.version = version;
        this.hollandCodeTestQuestions = hollandCodeTestQuestions;
    }

    @ManyToMany
    @JoinTable(name = "holland_code_test_questions", joinColumns = @JoinColumn(name = "holland_code_test_id"), inverseJoinColumns = @JoinColumn(name = "holland_code_test_question_id"))
    private List<HollandCodeTestQuestion> hollandCodeTestQuestions;

    @Override
    public Long getId() {
        return Id;
    }

    @Override
    public String getTitle() {
        return title;
    }

    public String getTitleRu() {
        return titleRu;
    }

    public String getTitleKz() {
        return titleKz;
    }

    @Override
    public String getDescription() {
        return description;
    }

    public String getDescriptionRu() {
        return descriptionRu;
    }

    public String getDescriptionKz() {
        return descriptionKz;
    }

    @Override
    public Integer getVersion() {
        return version;
    }

    public List<HollandCodeTestQuestion> getTestQuestions() {
        return hollandCodeTestQuestions;
    }
}
