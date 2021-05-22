package com.udistrital.finanzas.repository;

import com.udistrital.finanzas.entity.RevenueEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RevenueRepository extends JpaRepository<RevenueEntity, Long> {

    @Query("SELECT r FROM RevenueEntity r where r.clientId = :id")
    List<RevenueEntity> findIdByClientId(@Param("id") Long id);
}
