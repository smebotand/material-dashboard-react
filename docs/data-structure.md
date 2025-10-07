# EcoData Hub - Data Structure Documentation

## Overview

EcoData Hub manages environmental laboratory data through a hierarchical structure that organizes information from high-level projects down to individual analysis results. This document outlines the relationships and data flow between different entities in the system.

## Data Hierarchy

```mermaid
graph TD
    A[Project] --> B[Lab Order]
    B --> C[Sample]
    C --> D[Analysis]
    D --> E[Results]
    
    A --> F[Project Metadata]
    B --> G[Order Details]
    C --> H[Sample Metadata]
    D --> I[Analysis Parameters]
    E --> J[Quality Control Data]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0
    style E fill:#fce4ec
```

## Entity Relationships

### 1. Project Level
```mermaid
erDiagram
    PROJECT {
        string projectId PK
        string projectName
        string clientName
        string projectManager
        date startDate
        date endDate
        string status
        string description
        object location
        array tags
    }
    
    LAB_ORDER {
        string orderId PK
        string projectId FK
        string orderNumber
        date orderDate
        string priority
        string status
        string submittedBy
        object metadata
    }
    
    PROJECT ||--o{ LAB_ORDER : contains
```

### 2. Lab Order to Sample Relationship
```mermaid
erDiagram
    LAB_ORDER {
        string orderId PK
        string projectId FK
        string orderNumber
        date orderDate
        string priority
        string status
        string submittedBy
    }
    
    SAMPLE {
        string sampleId PK
        string orderId FK
        string sampleNumber
        string sampleType
        object location
        date collectionDate
        string collectedBy
        object conditions
        string matrix
        string preservation
    }
    
    LAB_ORDER ||--o{ SAMPLE : includes
```

### 3. Sample to Analysis Relationship
```mermaid
erDiagram
    SAMPLE {
        string sampleId PK
        string orderId FK
        string sampleNumber
        string sampleType
        object location
        date collectionDate
        string matrix
    }
    
    ANALYSIS {
        string analysisId PK
        string sampleId FK
        string analysisType
        string method
        string analyte
        date startDate
        date completedDate
        string status
        string analyst
        object parameters
    }
    
    SAMPLE ||--o{ ANALYSIS : requires
```

### 4. Complete Data Flow
```mermaid
flowchart LR
    A[Client Request] --> B[Create Project]
    B --> C[Generate Lab Order]
    C --> D[Sample Collection]
    D --> E[Sample Registration]
    E --> F[Analysis Assignment]
    F --> G[Laboratory Testing]
    G --> H[Quality Control]
    H --> I[Results Review]
    I --> J[Data Validation]
    J --> K[Report Generation]
    K --> L[Client Delivery]
    
    style A fill:#ffcdd2
    style L fill:#c8e6c9
```

## Firestore Collection Structure

```mermaid
graph TB
    subgraph "Firestore Database"
        A[projects]
        B[labOrders]
        C[samples]
        D[analyses]
        E[results]
        F[users]
        G[clients]
    end
    
    A --> |projectId| B
    B --> |orderId| C
    C --> |sampleId| D
    D --> |analysisId| E
    
    F --> |manages| A
    G --> |owns| A
```

## Analysis Types and Parameters

```mermaid
mindmap
  root((Analysis Types))
    Water Quality
      Physical Parameters
        Temperature
        pH
        Turbidity
        Conductivity
      Chemical Parameters
        Heavy Metals
        Nutrients
        Organics
        Pesticides
      Biological Parameters
        Bacteria
        Algae
        Toxicity
    Air Quality
      Particulates
        PM2.5
        PM10
        TSP
      Gases
        NOx
        SOx
        CO
        Ozone
      VOCs
        Benzene
        Toluene
        Xylene
    Soil Analysis
      Physical Properties
        Texture
        Moisture
        Density
      Chemical Properties
        pH
        Nutrients
        Contaminants
      Biological Properties
        Microbial Activity
        Organic Matter
```

## Status Workflow

```mermaid
stateDiagram-v2
    [*] --> ProjectCreated
    
    state "Project Level" as proj {
        ProjectCreated --> Active
        Active --> OnHold
        OnHold --> Active
        Active --> Completed
        Completed --> Archived
    }
    
    state "Lab Order Level" as order {
        OrderReceived --> InProgress
        InProgress --> UnderReview
        UnderReview --> Approved
        Approved --> Completed
        InProgress --> OnHold
        OnHold --> InProgress
    }
    
    state "Sample Level" as sample {
        Received --> Registered
        Registered --> InQueue
        InQueue --> InAnalysis
        InAnalysis --> AnalysisComplete
        AnalysisComplete --> QCReview
        QCReview --> Validated
    }
    
    state "Analysis Level" as analysis {
        Assigned --> InProgress
        InProgress --> Complete
        Complete --> QCCheck
        QCCheck --> Approved
        QCCheck --> Failed
        Failed --> Reanalysis
        Reanalysis --> InProgress
    }
```

## Data Access Patterns

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as API/Cloud Functions
    participant FS as Firestore
    participant S as Storage
    
    U->>F: Request Project Data
    F->>A: Get Project Details
    A->>FS: Query projects collection
    FS-->>A: Project data
    
    A->>FS: Query related lab orders
    FS-->>A: Lab orders data
    
    A->>FS: Query samples for orders
    FS-->>A: Samples data
    
    A->>FS: Query analyses for samples
    FS-->>A: Analyses data
    
    A->>S: Get result files/attachments
    S-->>A: File URLs
    
    A-->>F: Complete project hierarchy
    F-->>U: Display structured data
```

## Quality Control Integration

```mermaid
graph LR
    subgraph "QC Process"
        A[Sample Analysis] --> B[Initial Results]
        B --> C[QC Check]
        C --> D{QC Pass?}
        D -->|Yes| E[Approve Results]
        D -->|No| F[Flag for Review]
        F --> G[Reanalysis]
        G --> B
        E --> H[Final Report]
    end
    
    subgraph "QC Types"
        I[Blank Samples]
        J[Duplicate Samples]
        K[Spike Samples]
        L[Reference Standards]
    end
    
    C --> I
    C --> J
    C --> K
    C --> L
```

## Reporting Structure

```mermaid
graph TD
    A[Project Report] --> B[Executive Summary]
    A --> C[Lab Order Reports]
    C --> D[Sample Reports]
    D --> E[Analysis Reports]
    E --> F[Individual Results]
    
    A --> G[Data Visualizations]
    G --> H[Charts & Graphs]
    G --> I[Maps & Locations]
    G --> J[Trend Analysis]
    
    A --> K[Quality Assurance]
    K --> L[QC Data]
    K --> M[Method Validation]
    K --> N[Chain of Custody]
    
    style A fill:#e3f2fd
    style G fill:#f3e5f5
    style K fill:#e8f5e8
```

This documentation provides a comprehensive overview of the data structure and relationships in EcoData Hub, serving as a reference for developers, users, and stakeholders understanding the system architecture.