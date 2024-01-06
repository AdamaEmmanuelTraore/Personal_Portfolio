package com.tae4solution.personalportfolio.config;

import com.tae4solution.personalportfolio.entity.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class PersonalPortfolioRestConfig implements RepositoryRestConfigurer {

    // CREAZIONE E INIEZIONE DEL GESTORE DELL'ENTITA' JPA
    private EntityManager entityManager;
    @Autowired
    public PersonalPortfolioRestConfig(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

        HttpMethod[] theUnsupportedActions = { HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE };

        // DISATTIVARE I METODI HTTP DELLA SEGUENTE REPOSITORY "SectionCategory", PER RENDERLO DI SOLA LETTURA: PUT, POST E DELETE
        config.getExposureConfiguration()
                .forDomainType(SectionCategory.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // DISATTIVARE I METODI HTTP DELLA SEGUENTE REPOSITORY "Section", PER RENDERLO DI SOLA LETTURA: PUT, POST E DELETE
        config.getExposureConfiguration()
                .forDomainType(Section.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // DISATTIVARE I METODI HTTP DELLA SEGUENTE REPOSITORY "AcademyExperience", PER RENDERLO DI SOLA LETTURA: PUT, POST E DELETE
        config.getExposureConfiguration()
                .forDomainType(AcademyExperience.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // DISATTIVARE I METODI HTTP DELLA SEGUENTE REPOSITORY "WorkExperience", PER RENDERLO DI SOLA LETTURA: PUT, POST E DELETE
        config.getExposureConfiguration()
                .forDomainType(WorkExperience.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));


        // DISATTIVARE I METODI HTTP DELLA SEGUENTE REPOSITORY "FileCv", PER RENDERLO DI SOLA LETTURA: PUT, POST E DELETE
        config.getExposureConfiguration()
                .forDomainType(FileCv.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));


        // QUI CHIAMO UN METODO HELPER INTERNO
        exposeIds(config);
    }
    private void exposeIds(RepositoryRestConfiguration config) {
        // OTTERRO' UNA RACCOLTA DI TUTTE LE CLASSI DI ENTITA' DAL GESTORE DELL'ENTITA'
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        // QUI CREO UN ELENCO DI ARRAY VUOTO DEI TIPI DI ENTITA'
        List<Class> entityClasses = new ArrayList<>();
        for (EntityType tempEntityType : entities) {
            entityClasses.add(tempEntityType.getJavaType());
        }
        // QUI ESPONGO FINALMENTE GLI ID ENTITA' PER I TIPI DI ENTITA'/DOMINIO
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);

    }
}
