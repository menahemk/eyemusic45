﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace eyemusic45.DAL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class amedilab_dataEntities : DbContext
    {
        public amedilab_dataEntities()
            : base("name=amedilab_dataEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<desacriptaion> desacriptaions { get; set; }
        public virtual DbSet<exam> exams { get; set; }
        public virtual DbSet<exam_q> exam_q { get; set; }
        public virtual DbSet<exam_q_levels> exam_q_levels { get; set; }
        public virtual DbSet<feedBackWithDetail> feedBackWithDetails { get; set; }
        public virtual DbSet<level_1> level_1 { get; set; }
        public virtual DbSet<level_2> level_2 { get; set; }
        public virtual DbSet<level_3> level_3 { get; set; }
        public virtual DbSet<level_4> level_4 { get; set; }
        public virtual DbSet<level_5> level_5 { get; set; }
        public virtual DbSet<level_6> level_6 { get; set; }
        public virtual DbSet<level> levels { get; set; }
        public virtual DbSet<parmater> parmaters { get; set; }
        public virtual DbSet<pic_paths> pic_paths { get; set; }
        public virtual DbSet<RespTrainShort> RespTrainShorts { get; set; }
        public virtual DbSet<shadow> shadows { get; set; }
        public virtual DbSet<ShelonFinish> ShelonFinishes { get; set; }
        public virtual DbSet<stage> stages { get; set; }
        public virtual DbSet<step_by_step> step_by_step { get; set; }
        public virtual DbSet<StepByStepHappy> StepByStepHappies { get; set; }
        public virtual DbSet<userID> userIDs { get; set; }
        public virtual DbSet<virtualGame> virtualGames { get; set; }
        public virtual DbSet<stepbystepMin> stepbystepMins { get; set; }
        public virtual DbSet<exam_QUESTION> exam_QUESTION { get; set; }
        public virtual DbSet<examWithLevel> examWithLevels { get; set; }
        public virtual DbSet<MaxUserStepByStep> MaxUserStepBySteps { get; set; }
        public virtual DbSet<RespTrainView> RespTrainViews { get; set; }
        public virtual DbSet<resualt_exam> resualt_exam { get; set; }
        public virtual DbSet<resualt_exam_row> resualt_exam_row { get; set; }
        public virtual DbSet<step_view> step_view { get; set; }
        public virtual DbSet<RespTrain> RespTrains { get; set; }
        public virtual DbSet<stepByStep_user> stepByStep_user { get; set; }
        public virtual DbSet<sumShachar> sumShachars { get; set; }
        public virtual DbSet<sumShacharLevel5> sumShacharLevel5 { get; set; }
        public virtual DbSet<sumShacharOnlySuccess> sumShacharOnlySuccesses { get; set; }
    }
}
