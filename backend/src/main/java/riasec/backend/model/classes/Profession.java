package riasec.backend.model.classes;

import jakarta.persistence.*;

@Entity
public class Profession {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

    private String title;
    private String titleRu;
    private String titleKz;
    private String hollandCode;

    public Profession() {
    }

    public Profession(String title, String titleRu, String titleKz, String hollandCode) {
        this.title = title;
        this.titleRu = titleRu;
        this.titleKz = titleKz;
        this.hollandCode = hollandCode;
    }

    public Long getId() {
        return Id;
    }

    public String getTitle() {
        return title;
    }

    public String getTitleRu() {
        return titleRu;
    }

    public String getTitleKz() {
        return titleKz;
    }

    public String getHollandCode() {
        return hollandCode;
    }

}
