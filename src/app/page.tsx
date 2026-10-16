      screens: {
        orderBy: [asc(screens.displayOrder)],
        with: {
          annotations: {
            orderBy: [asc(annotations.displayOrder)],
          },
        },
      },
    },
  });

  return (
    <ClientWrapper>
      <div className="v2-theme">
        <Header />
        <HeroV2 />

        <ServicesV2 />

        {/* Cases Section */}
        <section id="cases-section" style={{ padding: '5.1rem 0 0 0', backgroundColor: '#ffffff' }}>
           {/* Frame starting under subline with dot matrix pattern */}
          <div 
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              padding: '2.25rem 0',
              marginBottom: '3.3rem'
            }}
          >
            <div style={{ width: '100%', margin: '0', padding: '0' }}>
              <ProjectsV2 initialProjects={publishedProjects as any} />
            </div>
          </div>
        </section>

        {/* How It Works (3 simple steps process) */}
        <HowItWorks />

        {/* Process Section */}
        <ProcessSection />

        {/* Editorial Statement */}
        <EditorialStatement />
      </div>
    </ClientWrapper>
  );
}
